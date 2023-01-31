(function(Scratch) {
    'use strict';
  
    class JsonExtension {
      getInfo() {
        return {
          id: 'skyhigh173.JSONS',
          name: 'JSON',
          color1: '#2dc4c4',
          color2: '#2dc4b3',
          color3: '#29a395',
          blocks: [
            {
              opcode: 'JSON_getItem',
              blockType: Scratch.BlockType.REPORTER,
              text: 'get [ITEM] from JSON [JSONS]',
              arguments: {
                ITEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'key'
                },
                JSONS: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '{"key":"value"}'
                }
              }
            },
            {
                opcode: 'JSON_removeItem',
                blockType: Scratch.BlockType.REPORTER,
                text: 'remove [ITEM] from JSON [JSONS]',
                arguments: {
                  ITEM: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'key'
                  },
                  JSONS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{"key":"value", "key2":"value2"}'
                  }
                }
              },
              {
                opcode: 'JSON_renameItem',
                blockType: Scratch.BlockType.REPORTER,
                text: 'rename [ITEM] to [NEWITEM] from JSON [JSONS]',
                arguments: {
                  ITEM: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'key'
                  },
                  NEWITEM: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'newKey'
                  },
                  JSONS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{"key":"value"}'
                  }
                }
              },
              {
                opcode: 'JSON_setJSON',
                blockType: Scratch.BlockType.REPORTER,
                text: 'set [KEY] to [VALUE] in JSON [JSONS]',
                arguments: {
                KEY: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'key'
                  },
                  VALUE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'value2'
                  },
                  JSONS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{"key":"value"}'
                  }
                }
              },
              {
                opcode: 'JSON_getList',
                blockType: Scratch.BlockType.REPORTER,
                text: 'get item [ITEM] of list [LISTS]',
                arguments: {
                item: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1
                  },
                  JSONS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '["scratch","turboWarp"]'
                  }
                }
              },
              {
                opcode: 'JSON_getLength',
                blockType: Scratch.BlockType.REPORTER,
                text: 'get length of [JSONS]',
                arguments: {
                  JSONS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '["scratch","turboWarp"]'
                  }
                }
              },
          ]
        };
      }
  
      /**
       * return the value of the key in JSON
       * @param {String} ITEM
       * @param {String} JSONS
       * @returns {String} the value of the key "ITEM" in "JSONS"
       */
      JSON_getItem({ ITEM, JSONS }) {
        try {
            return JSON.stringify(JSON.parse(JSONS)[ITEM]);
        } catch {
            return '';
        }
      }

      /**
       * return a JSON String after remove an item from JSON
       * @param {String} ITEM
       * @param {String} JSONS
       * @returns {String} the JSON after removing "ITEM" in "JSONS"
       */
      JSON_removeItem({ ITEM, JSONS }) {
        try {
            let json_object = JSON.parse(JSONS);
            delete json_object[ITEM];
            return JSON.stringify(json_object);
        } catch {
            return '';
        }
      }

      /**
       * rename key to another value.
       * may overwrite existing key.
       * @param {String} ITEM
       * @param {String} NEWITEM
       * @param {String} JSONS
       * @returns the JSON after rename "ITEM" to "ITEM2" in "JSONS"
       */
      JSON_renameItem({ ITEM, NEWITEM, JSONS }) {
        try {
            let json_object = JSON.parse(JSONS);
            json_object[NEWITEM] = json_object[ITEM];
            delete json_object[ITEM];
            return JSON.stringify(json_object);
        } catch {
            return '';
        }
      }

      JSON_setJSON({ KEY, VALUE, JSONS }) {
        try {
            let json_object = JSON.parse(JSONS);
            json_object[KEY] = VALUE;
            return JSON.stringify(json_object);
        } catch {
            return '';
        }
      }

      JSON_getLength({ JSONS }) {
        try {
            let json_object = JSON.parse(JSONS);
            if (json_object.constructor == Array) {
                return json_object.length;
            } else if (json_object.constructor == Object) {
                return Object.keys(json_object).length;
            }
        } catch {
            return '';
        }
      }

      JSON_getList({ ITEM, LISTS }) {
        try {
            return JSON.stringify(JSON.parse(LISTS)[ITEM]);
        } catch {
            return '';
        }
      }
      

      /**
       * checks if the string given is a valid JSON string
       * @param {String} JSONS
       * @returns {Boolean} if it is a valid JSON
       */
      JSON_isValid({ JSONS }) {
        try {
            JSON.parse(JSONS);
            return true;
        } catch {
            return false;
        }
      }
    }
  
    Scratch.extensions.register(new JsonExtension());
  })(Scratch);
