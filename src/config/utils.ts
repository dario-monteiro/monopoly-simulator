import * as fs from 'fs';

export class Utils {
  static buildObjectFromFile(fileName): Promise<any> {
    return new Promise((resolve) => {
      fs.readFile(fileName, (err, content) => {
        if (err) {
          throw new Error(err.message);
        }
        return resolve(JSON.parse(content.toString()));
      });
    });
  }
}
