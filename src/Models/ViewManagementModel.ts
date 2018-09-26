export namespace Types {
    export type Page = {
        title: string;
        url: any;
        iconSrc: string;
        hasChildren?: boolean;
        childrens?: Array<Page>;
    };
    export type ViewManagement = {
        /** wyświetlenie/ukrycie loadera  */
        loaderVisible: boolean;
        /** rozszerzenie/zwinięcie menu glównego  */
        sidebarMenuExpanded: boolean;
        /** wyświetlenie/ukrycie panelu ze szczegółami wybranego elementu  */
        detailsPanelVisible: boolean;
        /** strona na której aktualnie przebywa użytkownik  */
        activePage?: Page;
    };
}
