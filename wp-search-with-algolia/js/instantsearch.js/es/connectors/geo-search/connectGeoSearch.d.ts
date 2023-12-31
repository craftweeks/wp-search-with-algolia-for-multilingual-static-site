import type { SendEventForHits } from '../../lib/utils';
import type { BaseHit, Connector, GeoLoc, Hit, TransformItems, WidgetRenderState } from '../../types';
export type GeoHit<THit extends BaseHit = Record<string, any>> = Hit<THit> & Required<Pick<Hit, '_geoloc'>>;
type Bounds = {
    /**
     * The top right corner of the map view.
     */
    northEast: GeoLoc;
    /**
     * The bottom left corner of the map view.
     */
    southWest: GeoLoc;
};
export type GeoSearchRenderState<THit extends BaseHit = Record<string, any>> = {
    /**
     * Reset the current bounding box refinement.
     */
    clearMapRefinement: () => void;
    /**
     * The current bounding box of the search.
     */
    currentRefinement?: Bounds;
    /**
     * Return true if the map has move since the last refinement.
     */
    hasMapMoveSinceLastRefine: () => boolean;
    /**
     * Return true if the current refinement is set with the map bounds.
     */
    isRefinedWithMap: () => boolean;
    /**
     * Return true if the user is able to refine on map move.
     */
    isRefineOnMapMove: () => boolean;
    /**
     * The matched hits from Algolia API.
     */
    items: Array<GeoHit<THit>>;
    /**
     * The current position of the search.
     */
    position?: GeoLoc;
    /**
     * Sets a bounding box to filter the results from the given map bounds.
     */
    refine: (bounds: Bounds) => void;
    /**
     * Send event to insights middleware
     */
    sendEvent: SendEventForHits;
    /**
     * Set the fact that the map has moved since the last refinement, should be
     * called on each map move. The call to the function triggers a new rendering
     * only when the value change.
     */
    setMapMoveSinceLastRefine: () => void;
    /**
     * Toggle the fact that the user is able to refine on map move.
     */
    toggleRefineOnMapMove: () => void;
};
export type GeoSearchConnectorParams<THit extends BaseHit = Record<string, any>> = {
    /**
     * If true, refine will be triggered as you move the map.
     * @default true
     */
    enableRefineOnMapMove?: boolean;
    /**
     * Function to transform the items passed to the templates.
     * @default items => items
     */
    transformItems?: TransformItems<GeoHit<THit>>;
};
export type GeoSearchWidgetDescription<THit extends BaseHit = Record<string, any>> = {
    $$type: 'ais.geoSearch';
    renderState: GeoSearchRenderState<THit>;
    indexRenderState: {
        geoSearch: WidgetRenderState<GeoSearchRenderState<THit>, GeoSearchConnectorParams<THit>>;
    };
    indexUiState: {
        geoSearch: {
            /**
             * The rectangular area in geo coordinates.
             * The rectangle is defined by two diagonally opposite points,
             * hence by 4 floats separated by commas.
             *
             * @example '47.3165,4.9665,47.3424,5.0201'
             */
            boundingBox: string;
        };
    };
};
export type GeoSearchConnector<THit extends BaseHit = Record<string, any>> = Connector<GeoSearchWidgetDescription<THit>, GeoSearchConnectorParams<THit>>;
/**
 * The **GeoSearch** connector provides the logic to build a widget that will display the results on a map. It also provides a way to search for results based on their position. The connector provides functions to manage the search experience (search on map interaction or control the interaction for example).
 *
 * @requirements
 *
 * Note that the GeoSearch connector uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be passed to the rendering function.
 *
 * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
 */
declare const connectGeoSearch: GeoSearchConnector;
export default connectGeoSearch;
