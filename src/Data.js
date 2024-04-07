const Cars = [
    {
      model: "Honda Civic",
      colorsByPopularity: ["Black", "Red"],
      features: {
        topspeed: 140,
        zeroto60: 8.2
      }
    },
    {
      model: "Teslas Model 3",
      colorsByPopularity: ["White", "Red"],
      features: {
        topspeed: 160,
        zeroto60: 5.3
      }
    }
  ];

  let [honda, tesla] = Cars;
  export default Cars;
  export {honda, tesla};
  