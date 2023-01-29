export const up = (queryInterface, Sequelize) =>
  queryInterface.createTable("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstName: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dob: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    bike_type: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    bike_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rider_tag: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    experience: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

export const down = (queryInterface) => queryInterface.dropTable("users");
