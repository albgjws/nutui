import Vue  from 'vue';

declare class UIComponent extends Vue {
    static install (vue: typeof Vue): void
}

export interface InstallationOptions {
    locale?: any
    lang?: any
}

export const version: string

export const locale: (l:any) => void

export function install (vue: typeof Vue, options: InstallationOptions): void

export declare class ActionSheet extends UIComponent {}
export declare class Badge extends UIComponent {}
export declare class Button extends UIComponent {}
export declare class ButtonGroup extends UIComponent {}
export declare class Calendar extends UIComponent {}
export declare class Cell extends UIComponent {}
export declare class CheckBox extends UIComponent {}
export declare class CheckBoxGroup extends UIComponent {}
export declare class Col extends UIComponent {}
export declare class DatePicker extends UIComponent {}
export declare class Dialog extends UIComponent {}
export declare class Flex extends UIComponent {}
export declare class Grid extends UIComponent {}
export declare class GridCol extends UIComponent {}
export declare class GridRow extends UIComponent {}
export declare class Icon extends UIComponent {}
export declare class ImagePicker extends UIComponent {}
export declare class Menu extends UIComponent {}
export declare class Navbar extends UIComponent {}
export declare class NoticeBar extends UIComponent {}
export declare class Picker extends UIComponent {}
export declare class Price extends UIComponent {}
export declare class Progress extends UIComponent {}
export declare class Radio extends UIComponent {}
export declare class RadioGroup extends UIComponent {}
export declare class Range extends UIComponent {}
export declare class Rate extends UIComponent {}
export declare class Row extends UIComponent {}
export declare class SearchBar extends UIComponent {}
export declare class ShortPassword extends UIComponent {}
export declare class Skeleton extends UIComponent {}
export declare class Slider extends UIComponent {}
export declare class Stepper extends UIComponent {}
export declare class Steps extends UIComponent {}
export declare class Swiper extends UIComponent {}
export declare class Switch extends UIComponent {}
export declare class Tab extends UIComponent {}
export declare class Tabbar extends UIComponent {}
export declare class TabPanel extends UIComponent {}
export declare class Toast extends UIComponent {}
export declare class BackTop extends UIComponent {}
export declare class Scroller extends UIComponent {}
export declare class CountDown extends UIComponent {}
export declare class Uploader extends UIComponent {}
export declare class TextInput extends UIComponent {}
export declare class Avatar extends UIComponent {}
export declare class Infiniteloading extends UIComponent {}
export declare class Lazyload extends UIComponent {}

export declare class Keyboard extends UIComponent { }
export declare class Gridselect extends UIComponent { }
export declare class Overlay extends UIComponent { }
export declare class Mask extends UIComponent { }
export declare class Grid extends UIComponent {}
export declare class Popup extends UIComponent {}
export declare class Swiperfull extends UIComponent {}
export declare class Captchafield extends UIComponent {}
export declare class Numberfield extends UIComponent {}
export declare class Passwordfield extends UIComponent {}
export declare class Textfield extends UIComponent {}
export declare class Textarea extends UIComponent {}
export declare class Calendarrow extends UIComponent {}
export declare class Foldlist extends UIComponent {}
export declare class Infolist extends UIComponent {}
export declare class Loading extends UIComponent { }
export declare class Lazyrender extends UIComponent {}
export declare class Partloading extends UIComponent { }
export declare class Marquee extends UIComponent { }
export declare class Process extends UIComponent { }
export declare class Processrow extends UIComponent { }
export declare class Result extends UIComponent { }
export declare class Tag extends UIComponent { }
export declare class Tagwall extends UIComponent { }
export declare class Bank extends UIComponent { }
export declare class Mapcity extends UIComponent { }
export declare class Popover extends UIComponent { }
export declare class Swipecell extends UIComponent { }
export declare class Tabgroup extends UIComponent { }
export declare class Epslider extends UIComponent { }
export declare class Slidermenu extends UIComponent { }
export declare class Indexlist extends UIComponent { }
