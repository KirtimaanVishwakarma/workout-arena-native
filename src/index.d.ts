interface ButtonInterface {
    title: string;
    onPress?: () => void;
    textColor?: string;
    buttonStyle?: {
        backgroundColor?: string;
    },
    textColor?: string;
    isPrimaryBtn?: boolean;
    btnStyles?: any;
    btnTextStyle?: any;
}