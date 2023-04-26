import { TouchableOpacity, Text } from "react-native";
import styles from "../styles";

type ProductTypeProps = {
    title: string,
    isSelected: boolean,
    onTap?: Function,
}

function ProductTypeButton(props: ProductTypeProps): JSX.Element {
    return (
        <TouchableOpacity
            style={[styles.buttonStyle, props.isSelected ? styles.selectedProduct : styles.unSelectedProduct]}
            onPress={() => {
                if (typeof props.onTap === 'function') {
                    props.onTap();
                }
            }}
        >
            <Text style={styles.productTypeText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ProductTypeButton;

