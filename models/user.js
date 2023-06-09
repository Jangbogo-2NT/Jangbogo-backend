const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            nickname: {
                type: Sequelize.STRING(45),
                allowNull: false,
                unique: true,
            },
            hp: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            pw: {
                type: Sequelize.STRING(61),
                allowNull: false,
            },
            gender: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            grade: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            },
            location: {
                type: Sequelize.STRING(50),
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            token: {
                type: Sequelize.STRING(1000),
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'user',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasOne(db.Ripeness, { foreignKey: 'fk_user_id_ripeness', sourceKey: 'id' });
        db.User.hasMany(db.Refrigerator, { foreignKey: 'fk_user_id_refrigerator', sourceKey: 'id' });
        db.User.hasMany(db.Memo, { foreignKey: 'fk_user_id_memo', sourceKey: 'id' });
        db.User.hasMany(db.GroupPurchaseOrganize, { foreignKey: 'fk_user_id_organize', sourceKey: 'id' });
        db.User.hasMany(db.GroupPurchaseTeam, { foreignKey: 'user_id', sourceKey: 'id' });
        db.User.hasMany(db.Notice, { foreignKey: 'user_id', sourceKey: 'id' });
    }
};

module.exports = User;