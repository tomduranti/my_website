import { generateId } from '../../../utils/generateId.js';
import { resources } from '../../../utils/i18n/index.js';

export let lngArr = [];

Object.keys(resources).forEach(lng => lngArr.push({ locale: lng, id: generateId() }));