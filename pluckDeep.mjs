import {isObject} from '../';

const pluckDeep = obj => {
  const keys = Object.keys(obj);
  return key => {
    for (let i = 0; i < keys.length; i++) {
      const currKey = keys[i];
      if(currKey === key) {
        return obj[key];
      }
      
      if (isObject(obj[currKey])) {
        const plucked = pluckDeep(obj[currKey])(key)
        if (plucked) {
          return plucked;
        }
      }
    }
    
    return null;
  };
}

export default pluckDeep;
