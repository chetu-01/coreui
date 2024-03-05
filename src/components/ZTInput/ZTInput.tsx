import { useStyles } from "./ZTInput.style";
import {
  bundleIcon,
  CheckmarkCircle24Filled,
  DismissCircle24Filled,
} from "@fluentui/react-icons";
import {
  useId,
  Input,
  Label,
} from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";

const ZTInput = (props: InputProps) => {
  const inputId = useId("input");
  const styles = useStyles();
  const validate: any = bundleIcon(CheckmarkCircle24Filled, DismissCircle24Filled);

  return (
    <div className={styles.input}>
      <Input ref={null} id={inputId} contentAfter={validate} {...props} />
    </div>
  );
};

export default ZTInput;