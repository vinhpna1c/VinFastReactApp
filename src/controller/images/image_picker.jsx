import ImagePicker from 'react-native-image-crop-picker';

const pickImages=async()=>{
    ImagePicker.openPicker({
        multiple: true
      }).then(images => {
        console.log(images);
      });
    }



export {
    pickImages,
}

