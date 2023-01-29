import { compare, hash } from "bcrypt";
import { DataTypes, Model } from "sequelize";

import { tokenHelper, mailHelper } from "@/helpers";

export default function (sequelize) {
  class Expedition extends Model {
    static associate(models) {
      Expedition.hasMany(models.user, { foreignKey: "id" });
    }
  }

  Expedition.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique:true,
        primaryKey:true
      },
    //   user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
    expedition_destination: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      amenities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      itenary: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      modelName: "expedition",
      sequelize,
    }
  );
  return Expedition;
}
