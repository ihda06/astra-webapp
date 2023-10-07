import { itemMenu } from "../../../type/menu";
import MenuItem from "./MenuItem";

interface Menu {
  contents: itemMenu[];
}

export default function Menu({ contents }: Menu) {
  return (
    <div className="my-5 h-full flex flex-col gap-2 ">
      {contents.map((item, idx) => (
        <MenuItem key={idx} {...item}/>
      ))}
    </div>
  );
}
