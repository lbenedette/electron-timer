const jsonfile = require('jsonfile-promised');

const writeDataToFile = async (filepath, content) => {
  try {
    await jsonfile.writeFile(filepath, content, { spaces: 2 });
  }
  catch (err) {
    return console.log(err);
  }
}

module.exports = {
  saveData(task, time) {
    let filepath = `${__dirname}/data/${task}.json`;
    let content = {
      lastUpdate: new Date().toString(),
      time: time
    };

    writeDataToFile(filepath, content)
  },
  getData(task) {
    let filepath = `${__dirname}/data/${task}.json`;
    
    return jsonfile.readFile(filepath);
  }
}