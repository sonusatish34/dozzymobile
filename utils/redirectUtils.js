// utils/redirectUtils.js

const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirect to App Store if iOS
        window.open(
            "https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530",
            "_blank"
        );
    } else if (/android/i.test(userAgent)) {
        // Redirect to Play Store if Android
        window.open(
            "https://play.google.com/store/apps/details?id=com.dozzy_customer",
            "_blank"
        );
    } else {
        // Optional: Provide a message for non-mobile devices
        alert("App is available only on mobile devices.");
    }
};
export default handleStoreRedirect;