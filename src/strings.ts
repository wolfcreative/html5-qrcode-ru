/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `Ошибка разбора QR-кода, ошибка = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Ошибка получения пользовательского медиа, ошибка = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "Устройство не поддерживает navigator.mediaDevices, поддерживаемый в этом случае параметр cameraIdOrConfig - это параметр deviceId (строка).";
    }

    public static cameraStreamingNotSupported(): string {
        return "Воспроизведение видео с камеры не поддерживается браузером.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Невозможно получить доступ к поддерживаемым устройствам, неизвестная ошибка.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Доступ к камере поддерживается только в защищенном контексте, таком как https или localhost.";
    }

    public static scannerPaused(): string {
        return "Сканер приостановлен";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Сканирование";
    }

    public static idleStatus(): string {
        return "Ожидание";
    }

    public static errorStatus(): string {
        return "Ошибка";
    }

    public static permissionStatus(): string {
        return "Разрешение";
    }

    public static noCameraFoundErrorStatus(): string {
        return "Камеры не найдены";
    }

    public static lastMatch(decodedText: string): string {
        return `Последнее совпадение: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Сканер QR-кода";
    }

    public static cameraPermissionTitle(): string {
        return "Запрос разрешения на использование камеры";
    }

    public static cameraPermissionRequesting(): string {
        return "Запрос разрешения на использование камеры...";
    }

    public static noCameraFound(): string {
        return "Камера не найдена";
    }

    public static scanButtonStopScanningText(): string {
        return "Остановить сканирование";
    }

    public static scanButtonStartScanningText(): string {
        return "Начать сканирование";
    }

    public static torchOnButton(): string {
        return "Включить фонарик";
    }

    public static torchOffButton(): string {
        return "Выключить фонарик";
    }

    public static torchOnFailedMessage(): string {
        return "Не удалось включить фонарик";
    }

    public static torchOffFailedMessage(): string {
        return "Не удалось выключить фонарик";
    }

    public static scanButtonScanningStarting(): string {
        return "Запуск камеры...";
    }

    /**
     * Text to show when camera scan is selected.
     *
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Сканировать файл с изображением";
    }

    /**
     * Text to show when file based scan is selected.
     *
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Сканировать с помощью камеры";
    }

    public static selectCamera(): string {
        return "Выберите камеру";
    }

    public static fileSelectionChooseImage(): string {
        return "Выберите изображение";
    }

    public static fileSelectionChooseAnother(): string {
        return "Выберите другое изображение";
    }

    public static fileSelectionNoImageSelected(): string {
        return "Изображение не выбрано";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "Анонимная камера";
    }

    public static dragAndDropMessage(): string {
        return "Или перетащите изображение для сканирования";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "Или перетащите изображение для сканирования (не поддерживаются другие файлы)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return "увеличение";
    }

    public static loadingImage(): string {
        return "Загрузка изображения...";
    }

    public static cameraScanAltText(): string {
        return "Сканирование с помощью камеры";
    }

    public static fileScanAltText(): string {
        return "Сканирование с помощью файла";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Работает на основе ";
    }

    public static reportIssues(): string {
        return "Сообщить об ошибке";
    }
}
