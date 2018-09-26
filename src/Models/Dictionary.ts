import { PageEnumTypes } from './EnumTypes/PageEnumTypes';
import { VehicleEnumTypes } from './EnumTypes/VehicleEnumTypes';
import { Types } from './ViewManagementModel';

export const PageUrl = new Map<PageEnumTypes.Page, string>([
    [PageEnumTypes.Page.HOME, '/'],
    [PageEnumTypes.Page.MAP, '/map'],
    [PageEnumTypes.Page.ZONES, '/zones'],
    [PageEnumTypes.Page.CONTRACTORS, '/contractors'],
    [PageEnumTypes.Page.USERS, '/users'],
    [PageEnumTypes.Page.MESSAGES, '/messages'],
    [PageEnumTypes.Page.SETTINGS, '/settings'],
    [PageEnumTypes.Page.CARRAPORT, '/raports/vehicle'],
    [PageEnumTypes.Page.FLEETRAPORT, '/raports/fleet'],
    [PageEnumTypes.Page.DRIVERRAPORT, '/raports/driver'],
    [PageEnumTypes.Page.MANUAL, '/manual'],
    [PageEnumTypes.Page.LANGUAGES, '/languages']
]);

export const PageUrlReverse = new Map<string, PageEnumTypes.Page>([
    ['/', PageEnumTypes.Page.HOME],
    ['/map', PageEnumTypes.Page.MAP],
    ['/zones', PageEnumTypes.Page.ZONES],
    ['/contractors', PageEnumTypes.Page.CONTRACTORS],
    ['/users', PageEnumTypes.Page.USERS],
    ['/messages', PageEnumTypes.Page.USERS],
    ['/settings', PageEnumTypes.Page.SETTINGS],
    ['/raports/vehicle', PageEnumTypes.Page.CARRAPORT],
    ['/raports/fleet', PageEnumTypes.Page.FLEETRAPORT],
    ['/raports/driver', PageEnumTypes.Page.DRIVERRAPORT],
    ['/manual', PageEnumTypes.Page.MANUAL],
    ['/languages', PageEnumTypes.Page.LANGUAGES]
]);

export const PageDetails = new Map<PageEnumTypes.Page, Types.Page>([
    [PageEnumTypes.Page.HOME, { title: 'Strona główna', url: PageUrl.get(PageEnumTypes.Page.HOME), iconSrc: '/images/icons/home.svg' }],
    [PageEnumTypes.Page.MAP, { title: 'Mapa', url: PageUrl.get(PageEnumTypes.Page.MAP), iconSrc: '/images/icons/map.svg' }],
    [PageEnumTypes.Page.ZONES, { title: 'Strefy/ POI. Tunele 2.0', url: PageUrl.get(PageEnumTypes.Page.ZONES), iconSrc: '/images/icons/zones.svg' }],
    [PageEnumTypes.Page.CONTRACTORS, { title: 'Kontrahenci', url: PageUrl.get(PageEnumTypes.Page.CONTRACTORS), iconSrc: '/images/icons/contractors.svg' }],
    [PageEnumTypes.Page.USERS, { title: 'Użytkownicy', url: PageUrl.get(PageEnumTypes.Page.USERS), iconSrc: '/images/icons/account.svg' }],
    [PageEnumTypes.Page.MESSAGES, { title: 'Wiadomości', url: PageUrl.get(PageEnumTypes.Page.MESSAGES), iconSrc: '/images/icons/messages.svg' }],
    [PageEnumTypes.Page.SETTINGS, { title: 'Ustawienia', url: PageUrl.get(PageEnumTypes.Page.SETTINGS), iconSrc: '/images/icons/settings.svg' }],
    [PageEnumTypes.Page.CARRAPORT, { title: 'Raporty dla pojazdu', url: PageUrl.get(PageEnumTypes.Page.CARRAPORT), iconSrc: '/images/icons/car.svg' }],
    [PageEnumTypes.Page.FLEETRAPORT, { title: 'Raporty flotowe', url: PageUrl.get(PageEnumTypes.Page.FLEETRAPORT), iconSrc: '/images/icons/fleet.svg' }],
    [PageEnumTypes.Page.DRIVERRAPORT, { title: 'Raporty dla kierowcy', url: PageUrl.get(PageEnumTypes.Page.DRIVERRAPORT), iconSrc: '/images/icons/driver.svg' }],
    [PageEnumTypes.Page.MANUAL, { title: 'Instrukcja online', url: PageUrl.get(PageEnumTypes.Page.MANUAL), iconSrc: '/images/icons/manual.svg' }],
    [PageEnumTypes.Page.LANGUAGES, { title: 'POLSKA', url: PageUrl.get(PageEnumTypes.Page.LANGUAGES), iconSrc: '/images/icons/countries/republic-of-poland.svg' }]
]);
export const MainMenu: Array<PageEnumTypes.Page> = [
    PageEnumTypes.Page.HOME,
    PageEnumTypes.Page.MAP,
    PageEnumTypes.Page.ZONES,
    PageEnumTypes.Page.CONTRACTORS,
    PageEnumTypes.Page.USERS,
    PageEnumTypes.Page.MESSAGES,
    PageEnumTypes.Page.SETTINGS
];
export const RaportMenu: Array<PageEnumTypes.Page> = [PageEnumTypes.Page.CARRAPORT, PageEnumTypes.Page.FLEETRAPORT, PageEnumTypes.Page.DRIVERRAPORT];

export const BottomMenu: Array<PageEnumTypes.Page> = [PageEnumTypes.Page.MANUAL, PageEnumTypes.Page.LANGUAGES];

export const SpeedLimitCssClass = new Map<VehicleEnumTypes.VehicleSpeedEnum, string>([
    [VehicleEnumTypes.VehicleSpeedEnum.GRAY, ''],
    [VehicleEnumTypes.VehicleSpeedEnum.YELLOW, 'carDetailsComposite__carspeed-yellow'],
    [VehicleEnumTypes.VehicleSpeedEnum.RED, 'carDetailsComposite__carspeed-red'],
    [VehicleEnumTypes.VehicleSpeedEnum.GREEN, 'carDetailsComposite__carspeed-green']
]);

export const SpeedLimitImageSrc = new Map<VehicleEnumTypes.VehicleSpeedEnum, string>([
    [VehicleEnumTypes.VehicleSpeedEnum.GRAY, ''],
    [VehicleEnumTypes.VehicleSpeedEnum.YELLOW, '/images/icons/car_speed_exceeding.png'],
    [VehicleEnumTypes.VehicleSpeedEnum.RED, '/images/icons/car_speed_warn.png'],
    [VehicleEnumTypes.VehicleSpeedEnum.GREEN, '/images/icons/car_speed_ok.png']
]);

export const SpeedLimitMapIcon = new Map<VehicleEnumTypes.VehicleSpeedEnum, string>([
    [VehicleEnumTypes.VehicleSpeedEnum.GRAY, '/images/icons/car_marker.png'],
    [VehicleEnumTypes.VehicleSpeedEnum.YELLOW, '/images/icons/car_marker_yellow.png'],
    [VehicleEnumTypes.VehicleSpeedEnum.RED, '/images/icons/car_marker_red.png'],
    [VehicleEnumTypes.VehicleSpeedEnum.GREEN, '/images/icons/car_marker_green.png']
]);
