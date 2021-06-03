/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ImageType } from './image-type';
import { ItemFields } from './item-fields';
import { SortOrder } from './sort-order';

/**
 * Get programs dto.
 * @export
 * @interface GetProgramsDto
 */
export interface GetProgramsDto {
    /**
     * Gets or sets the channels to return guide information for.
     * @type {Array<string>}
     * @memberof GetProgramsDto
     */
    ChannelIds?: Array<string>;
    /**
     * Gets or sets optional. Filter by user id.
     * @type {string}
     * @memberof GetProgramsDto
     */
    UserId?: string;
    /**
     * Gets or sets the minimum premiere start date.  Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    MinStartDate?: string | null;
    /**
     * Gets or sets filter by programs that have completed airing, or not.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    HasAired?: boolean | null;
    /**
     * Gets or sets filter by programs that are currently airing, or not.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    IsAiring?: boolean | null;
    /**
     * Gets or sets the maximum premiere start date.  Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    MaxStartDate?: string | null;
    /**
     * Gets or sets the minimum premiere end date.  Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    MinEndDate?: string | null;
    /**
     * Gets or sets the maximum premiere end date.  Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    MaxEndDate?: string | null;
    /**
     * Gets or sets filter for movies.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    IsMovie?: boolean | null;
    /**
     * Gets or sets filter for series.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    IsSeries?: boolean | null;
    /**
     * Gets or sets filter for news.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    IsNews?: boolean | null;
    /**
     * Gets or sets filter for kids.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    IsKids?: boolean | null;
    /**
     * Gets or sets filter for sports.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    IsSports?: boolean | null;
    /**
     * Gets or sets the record index to start at. All items with a lower index will be dropped from the results.  Optional.
     * @type {number}
     * @memberof GetProgramsDto
     */
    StartIndex?: number | null;
    /**
     * Gets or sets the maximum number of records to return.  Optional.
     * @type {number}
     * @memberof GetProgramsDto
     */
    Limit?: number | null;
    /**
     * Gets or sets specify one or more sort orders, comma delimited. Options: Name, StartDate.  Optional.
     * @type {Array<string>}
     * @memberof GetProgramsDto
     */
    SortBy?: Array<string>;
    /**
     * Gets or sets sort Order - Ascending,Descending.
     * @type {Array<SortOrder>}
     * @memberof GetProgramsDto
     */
    SortOrder?: Array<SortOrder>;
    /**
     * Gets or sets the genres to return guide information for.
     * @type {Array<string>}
     * @memberof GetProgramsDto
     */
    Genres?: Array<string>;
    /**
     * Gets or sets the genre ids to return guide information for.
     * @type {Array<string>}
     * @memberof GetProgramsDto
     */
    GenreIds?: Array<string>;
    /**
     * Gets or sets include image information in output.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    EnableImages?: boolean | null;
    /**
     * Gets or sets a value indicating whether retrieve total record count.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    EnableTotalRecordCount?: boolean;
    /**
     * Gets or sets the max number of images to return, per image type.  Optional.
     * @type {number}
     * @memberof GetProgramsDto
     */
    ImageTypeLimit?: number | null;
    /**
     * Gets or sets the image types to include in the output.  Optional.
     * @type {Array<ImageType>}
     * @memberof GetProgramsDto
     */
    EnableImageTypes?: Array<ImageType>;
    /**
     * Gets or sets include user data.  Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    EnableUserData?: boolean | null;
    /**
     * Gets or sets filter by series timer id.  Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    SeriesTimerId?: string | null;
    /**
     * Gets or sets filter by library series id.  Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    LibrarySeriesId?: string;
    /**
     * Gets or sets specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.  Optional.
     * @type {Array<ItemFields>}
     * @memberof GetProgramsDto
     */
    Fields?: Array<ItemFields>;
}


