import useWindowWidth from "../../Hook/useWindowWidth";

export default function LayoutComponentTwo (){
    const onSmallScreen = useWindowWidth(600);
    
    return(
        <div>
            <h1>you are browsing on {onSmallScreen ? 'small': 'large'} device</h1>
        </div>
    );
}