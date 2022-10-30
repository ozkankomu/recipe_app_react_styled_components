import React from "react";
import { useLocation } from "react-router";

const Details = () => {
  const { state: det } = useLocation();
  console.log(det);

  return (
    <div
      style={{
        height: "35vw",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div
          className="card text-center my-auto"
          style={{ background: "#382525f1", color: "white" }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#17068760", color: "white" }}
          >
            <h1> {` Calories :  ${det.calories.toFixed(0)}`}</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card-body">
                <h3 className="card-title">{det.label}</h3>
                <p className="card-text">
                  {det.cuisineType[0]} / {det.dishType}{" "}
                </p>
                <h5 className="card-text">-ingredients-</h5>
                <p className="card-text">
                  <small className="text-muted">{det.ingredientLines[0]}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{det.ingredientLines[1]}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{det.ingredientLines[2]}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{det.ingredientLines[3]}</small>
                </p>
                <p>{`Meal Type : ${det.mealType[0]}`}</p>
              </div>
            </div>
            <div className="col-md-4 my-3 gap-2 ">
              <img
                src={det.image}
                className="img-fluid rounded-start rounded-4 "
                alt="..."
                style={{ width: "500px", height: "300px" }}
              />
            </div>
            <div className="col-md-2">
              <div className="card-body">
                <h3 className="card-title">Nutrients</h3>
                <p className="card-text">
                  {det.totalNutrients.CA.label} :
                  {det.totalNutrients.CA.quantity.toFixed(0)}
                  {det.totalNutrients.CA.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.CHOLE.label} :
                  {det.totalNutrients.CHOLE.quantity.toFixed(0)}
                  {det.totalNutrients.CHOLE.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.CHOCDF.label} :
                  {det.totalNutrients.CHOCDF.quantity.toFixed(0)}
                  {det.totalNutrients.CHOCDF.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.ENERC_KCAL.label} :
                  {det.totalNutrients.ENERC_KCAL.quantity.toFixed(0)}
                  {det.totalNutrients.ENERC_KCAL.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.FASAT.label} :
                  {det.totalNutrients.FASAT.quantity.toFixed(0)}
                  {det.totalNutrients.FASAT.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.FAT.label} :
                  {det.totalNutrients.FAT.quantity.toFixed(0)}
                  {det.totalNutrients.FAT.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.FE.label} :
                  {det.totalNutrients.FE.quantity.toFixed(0)}
                  {det.totalNutrients.FE.unit}
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-body">
                <h3 className="card-title"> Vitamin </h3>
                <p className="card-text">
                  {det.totalNutrients.THIA.label} :
                  {det.totalNutrients.THIA.quantity.toFixed(0)}
                  {det.totalNutrients.THIA.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.VITA_RAE.label} :
                  {det.totalNutrients.VITA_RAE.quantity.toFixed(0)}
                  {det.totalNutrients.VITA_RAE.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.VITB12.label} :
                  {det.totalNutrients.VITB12.quantity.toFixed(0)}
                  {det.totalNutrients.VITB12.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.VITC.label} :
                  {det.totalNutrients.VITC.quantity.toFixed(0)}
                  {det.totalNutrients.VITC.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.VITD.label} :
                  {det.totalNutrients.VITD.quantity.toFixed(0)}
                  {det.totalNutrients.VITD.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.VITK1.label} :
                  {det.totalNutrients.VITK1.quantity.toFixed(0)}
                  {det.totalNutrients.VITK1.unit}
                </p>
                <p className="card-text">
                  {det.totalNutrients.WATER.label} :
                  {det.totalNutrients.WATER.quantity.toFixed(0)}
                  {det.totalNutrients.WATER.unit}
                </p>
              </div>
            </div>
          </div>
          <div
            className="card-footer fs-4"
            style={{ backgroundColor: "#17068760", color: "white" }}
          >
            Recipe Detail Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
