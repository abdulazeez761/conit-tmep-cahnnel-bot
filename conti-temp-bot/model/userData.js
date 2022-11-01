const data = require('./sql')
//selecting the data
exports.getUserInfo = (romeID) => {
    return new Promise((resolve, reject) => {
        resolve(data.execute(`SELECT * FROM usertabel WHERE romeID = ${romeID}`))
        eject(Error('something went wrong '))
    })
}

exports.insertNewRome = (romeID) => {
    return new Promise((resolve, reject) => {
        resolve(data.execute(`INSERT INTO usertabel (romeID ) values(?)`,
            [romeID,]))
        reject(Error('something went wrong '))
    })
}
exports.muteUser = (userID, muted, romeID) => {
    return new Promise((resolve, reject) => {
        resolve(data.execute(`UPDATE usertabel SET userID = ${userID} , muted = ${muted} WHERE romeID = ${romeID}`,
        ))
        reject(Error('something went wrong '))
    })
}
exports.deleteColomn = (romeID) => {
    return new Promise((resolve, reject) => {
        resolve(data.execute(`DELETE FROM usertabel WHERE romeID = ${romeID}`
        ))
        reject(Error('something went wrong '))
    })
}