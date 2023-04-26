import ImagePicker, { Options } from 'react-native-image-crop-picker';

type MediaData = {
  mime: string,
  path: string,
}

const pickImages = async (options?:Options): Promise<MediaData[]> => {
  const respond = await ImagePicker.openPicker({
    mediaType:options?.mediaType,
    multiple: true
  });
  

  return [...respond.map((e) => {
    return {
      mime: e.mime,
      path: e.path,
    }
  })];
}




export {
  pickImages,
  MediaData
}

