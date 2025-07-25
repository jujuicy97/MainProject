import { supabase } from "./supabaseClient";

//혹시라도 이해안되시면 설명해드릴테니 편히 말씀주세요!
// 페이지별로 필요한 것들을 나눠두었습니다! 작업하실때 페이지별로 보고 사용하시면 될 것 같습니다 :) - 정우

/** 회원가입 페이지 */
/** 1. 로그인 **/ //체크완
export const fetchLogin = async (userID,password)=>{
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('user_id',userID)
        .eq('password',password)
        .single();
    return {data,error};
}

/** 2. 회원가입 **/ //체크완
export const fetchSignUp = async (
    username,
    userID,
    password,
    car,
    phone
)=>{
    //데이터를 가져오는 것이 아닌 집어넣는 것이라 data가 필요 없음
    const { error } = await supabase
        .from('users')
        .insert([{
            name:username,
            user_id:userID,
            password:password,
            car:car,
            phone:phone
        }]);
    return {success:!error,error};
}

/** 3. 아이디 찾기 **/ //체크완
export const findUserId = async (username,phone)=>{
    const { data, error } = await supabase
        .from('users')
        .select('user_id')
        .eq('name',username)
        .eq('phone',phone)
        .single();
    return {data,error};
}

/** 4. 비밀번호 찾기-변경 **/
export const findPassword = async (username,phone,userID,newpass)=>{
    const { data, error } = await supabase
        .from('users')
        .update({password:newpass})
        .eq('name',username)
        .eq('phone',phone)
        .eq('user_id',userID)
        .single();
    return {data,error};
}

/** 메인페이지 */
/** 1. 구역의 잔여석 가져오기 **/
export const fetchAllZoneStatus = async ()=>{
    const zones = ['A','B','C','D'];
    const results = {};
    //forEach는 await 불가능 // for~of문은 배열의 값의 반복
    for (const zone of zones) {
        //해당 구역 전체 자리 수
        const { count: total } = await supabase
            .from('parkarea')
            .select('*',{count:'exact', head:true})
            .eq('zone',zone);
        //예약된 자리 수
        const { count: reserved } = await supabase
            .from('parkarea')
            .select('*',{count:'exact',head:true})
            .eq('zone',zone)
            .eq('is_reserved',true);
        results[zone] = { //각 zone에서 해당 값들을 불러올 수 있게 됨.
            total: total,
            reserved: reserved,
            available: total - reserved,
        };
    }
    return results;
}


/** 예약페이지 */
/** 1. 해당 구역의 정보 전부 불러오기 **/
export const fetchParkArea = async (selectZone)=>{
    const { data, error } = await supabase
        .from('parkarea')
        .select('*')
        .eq('zone',selectZone)
        .order('num',{ascending:true})
    return {data,error};
}

/** 2. 예약 결제 **/ 
export const reserveAndPay = async ({
    userID,
    parkareaID,
    startTime,
    endTime,
    amount
})=>{
    //reservations에 추가
    const { data, error:reserveError } = await supabase
        .from('reservations')
        .insert([{
            user_id:userID,
            parkarea_id:parkareaID,
            start_time:new Date(startTime),
            end_time:new Date(endTime)
        }])
        .select()
        .single();
    if( reserveError ){
            return {date:false, error:reserveError};
    }
    //생성될 때 생기는 id
    const reserveID = data.id;
    //payments에 추가
    const { error:payError } = await supabase
        .from('payments')
        .insert([{
            user_id:userID,
            reservation_id:reserveID,
            amount:amount
        }]);
    if( payError ){
        return {data:false,error:payError};
    }
    //parkarea 상태변경
    const { error:parkareaError } = await supabase
        .from('parkarea')
        .update({is_reserved:true})
        .eq('id',parkareaID);
    if( parkareaError ){
        return {data:false,error:parkareaError};
    }
    //update나 insert는 넣거나 바꾸는 것이라 값을 안들고와도되지만 만들어진 reservations의 각 id값은 가져와야하기 때문에 data로 들고옴
    return {data:reserveID,error:false};
}

/** 마이페이지 */
/** 1. 예약내역확인 **/
export const fetchMyReserve = async (userID)=>{
    const { data, error } = await supabase
        .from('reservations')
        .select(`
            id,
            status,
            start_time,
            end_time,
            parkarea (
                zone,
                num
            )
        `)
        .eq('user_id',userID);
    return {data,error};
}

/** 2. 금액 가져오기 **/
export const fetchAmount = async ()=>{
    const { data, error } = await supabase
        .from('payments')
        .select('reserve_id','amount')
    return {data,error};
}

/** 3. 예약취소 **/
export const cancelReserve = async (reserveID,parkareaID)=>{
    //reservations 상태변경
    const { error } = await supabase
        .from('reservations')
        .update({status:'canceled'})
        .eq('id',reserveID);
    if( error ){
        return {data:false,error};
    }
    //parkarea 상태변경
    const { error:parkareaError } = await supabase
        .from('parkarea')
        .update({is_reserved:false})
        .eq('id',parkareaID);
    if( parkareaError ){
        return {data:false,error:parkareaError}
    }
    return {data:true,error};
}

/** 4. 비밀번호 변경 **/
//비밀번호 확인에서 일치하는거
export const changePassword = async (oldpass,newpass)=>{
    const { error } = await supabase
        .from('users')
        .update({password:newpass})
        .eq('password',oldpass);
    return {error};
}

/** 5. 연간이용권 등록 **/
export const yearlyPass = async (ID)=>{
    const { error } = await supabase
        .from('users')
        .update({yearly_pass:true})
        .eq('id',ID);
    return {error};
}