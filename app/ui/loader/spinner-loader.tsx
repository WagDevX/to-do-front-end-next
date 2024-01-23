import { ClipLoader } from "react-spinners";

export default function SpinnerLoader({ size = 35 }: { size: number }) {
  return <ClipLoader color="#51646E" size={size} />;
}
