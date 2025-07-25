
const Cancel = () => {
  const stored = localStorage.getItem("cancelData");
  const SelectCancel = stored ? JSON.parse(stored) : null;
  console.log( SelectCancel );

  return (
    <div id="cancel">
      <div className="cancel-reserve">
        <div>
          {SelectCancel.id}
          {SelectCancel.start_time}
          {SelectCancel.parkarea.zone}
          {SelectCancel.parkarea.num}
        </div>
      </div>
      <div className="cancel-confirm">

      </div>
    </div>
  );
};

export default Cancel;