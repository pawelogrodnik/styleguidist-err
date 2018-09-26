export interface MapTypeStyle {
    elementType?: MapTypeStyleElementType;
    featureType?: MapTypeStyleFeatureType;
    stylers?: Array<MapTypeStyler>;
}

export type MapTypeStyleFeatureType =
    | 'all'
    | 'administrative'
    | 'administrative.country'
    | 'administrative.land_parcel'
    | 'administrative.locality'
    | 'administrative.neighborhood'
    | 'administrative.province'
    | 'landscape'
    | 'landscape.man_made'
    | 'landscape.natural'
    | 'landscape.natural.landcover'
    | 'landscape.natural.terrain'
    | 'poi'
    | 'poi.attraction'
    | 'poi.business'
    | 'poi.government'
    | 'poi.medical'
    | 'poi.park'
    | 'poi.place_of_worship'
    | 'poi.school'
    | 'poi.sports_complex'
    | 'road'
    | 'road.arterial'
    | 'road.highway'
    | 'road.highway.controlled_access'
    | 'road.local'
    | 'transit'
    | 'transit.line'
    | 'transit.station'
    | 'transit.station.airport'
    | 'transit.station.bus'
    | 'transit.station.rail'
    | 'water';

export type MapTypeStyleElementType = 'all' | 'geometry' | 'geometry.fill' | 'geometry.stroke' | 'labels' | 'labels.icon' | 'labels.text' | 'labels.text.fill' | 'labels.text.stroke';

export interface MapTypeStyler {
    color?: string;
    gamma?: number;
    hue?: string;
    invert_lightness?: boolean;
    lightness?: number;
    saturation?: number;
    visibility?: string;
    weight?: number;
}

export const GMapStyles: Array<MapTypeStyle> = [
    {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
            {
                hue: '#000000'
            },
            {
                lightness: -100
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.province',
        elementType: 'geometry.fill',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [
            {
                visibility: 'on'
            },
            {
                saturation: 14
            },
            {
                lightness: -72
            }
        ]
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on'
            },
            {
                saturation: 0
            },
            {
                lightness: 0
            },
            {
                gamma: 9.83
            },
            {
                weight: 0.01
            }
        ]
    },
    {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on'
            },
            {
                weight: 0.01
            }
        ]
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [
            {
                visibility: 'off'
            },
            {
                hue: '#ff0000'
            },
            {
                weight: 0.01
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            {
                hue: '#dddddd'
            },
            {
                saturation: -100
            },
            {
                lightness: -3
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
            {
                hue: '#000000'
            },
            {
                saturation: -100
            },
            {
                lightness: -100
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
            {
                hue: '#000000'
            },
            {
                saturation: -100
            },
            {
                lightness: -100
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.business',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.business',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'on'
            },
            {
                saturation: 19
            },
            {
                hue: '#00ff90'
            }
        ]
    },
    {
        featureType: 'poi.government',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on'
            },
            {
                hue: '#ff0000'
            }
        ]
    },
    {
        featureType: 'poi.government',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'poi.school',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            {
                hue: '#bbbbbb'
            },
            {
                saturation: -100
            },
            {
                lightness: 26
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
            {
                hue: '#ffffff'
            },
            {
                saturation: -100
            },
            {
                lightness: 100
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
            {
                hue: '#ffffff'
            },
            {
                saturation: -100
            },
            {
                lightness: 100
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [
            {
                hue: '#000000'
            },
            {
                lightness: -100
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'transit.line',
        elementType: 'geometry.fill',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'transit.line',
        elementType: 'geometry.stroke',
        stylers: [
            {
                visibility: 'on'
            },
            {
                weight: 0.35
            }
        ]
    },
    {
        featureType: 'transit.line',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                hue: '#ffffff'
            },
            {
                saturation: -100
            },
            {
                lightness: 100
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
            {
                hue: '#000000'
            },
            {
                saturation: -100
            },
            {
                lightness: -100
            },
            {
                visibility: 'off'
            }
        ]
    }
];
