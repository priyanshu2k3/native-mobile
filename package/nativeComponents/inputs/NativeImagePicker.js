import React, { useEffect, useState } from "react";
import NativeOutlinedButton from "./NativeOutlinedButton";
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import NativeModal from "../utils/NativeModal";
import NativeTextButton from "./NativeTextButton";
import NativeBox from "../layouts/NativeBox";
import NativeAvatar from "../dataDisplay/NativeAvatar";

export default function NativeImagePicker(props) {
  const { onChange, id, formik, value } = props;

  const [localValue, setLocalvalue] = useState(value);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (localValue) {
      formik?.setFieldValue(id, localValue);
      if (onChange) {
        onChange(localValue);
      }
    }
  }, [localValue]);

  // const pickImage = async (type = 'camera') => {
  //   setModalOpen(false);
  //   if (type === 'camera') {
  //     launchCamera({})
  //       .then(image => {
  //         setLocalvalue(image.assets[0]);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   } else {
  //     launchImageLibrary({})
  //       .then(image => {
  //         setLocalvalue(image.assets[0]);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // };

  const pickImage = async (type = "camera") => {
    setModalOpen(false);
    if (type === "camera") {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then((image) => {
        console.log(image);
      });
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then((image) => {
        console.log(image);
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        // setModalOpen(true);
        pickImage("gallery");
      }}
    >
      {/* <NativeModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}>
        <NativeTextButton
          label="Camera"
          OnClick={() => {
           // pickImage('camera');
          }}
        />
        <NativeTextButton
          label="Pick Image"
          OnClick={() => {
            pickImage('gallery');
          }}
        />
      </NativeModal> */}
      {/* <NativeOutlinedButton
        // label="Pick Image"
        OnClick={() => {
          // setModalOpen(true);
          pickImage('gallery');
        }}
      > 
    </NativeOutlinedButton> */}
      <NativeAvatar
        src={
          props.value
            ? typeof props.value === "string"
              ? props.value
              : URL.createObjectURL(props.value)
            : "no_image.png"
        }
      />
    </TouchableOpacity>
  );
}
