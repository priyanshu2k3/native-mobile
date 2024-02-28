import NativeH from "./NativeH";

export default function NativeH2(props) {
  return (
    <NativeH {...props} __level="h2">
      {props.children}
    </NativeH>
  );
}
