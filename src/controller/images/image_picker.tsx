import ImagePicker from 'react-native-image-crop-picker';

type MediaData = {
  mime: string,
  path: string,
}

const pickImages = async (): Promise<MediaData[]> => {
  const respond = await ImagePicker.openPicker({
    multiple: true
  });

  return [...respond.map((e) => {
    return {
      mime: e.mime,
      path: e.path,
    };
  })];
}




export {
  pickImages,
  MediaData
}

