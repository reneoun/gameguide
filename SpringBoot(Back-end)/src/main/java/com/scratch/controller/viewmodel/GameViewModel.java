package com.scratch.controller.viewmodel;

public class GameViewModel {
    private String names;
    private String short_desc;
    private String image_url;

    public GameViewModel(String names, String short_desc, String image_url) {
        this.names = names;
        this.short_desc = short_desc;
        this.image_url = image_url;
    }

    public String getNames() {
        return names;
    }

    public void setNames(String names) {
        this.names = names;
    }

    public String getShort_desc() {
        return short_desc;
    }

    public void setShort_desc(String short_desc) {
        this.short_desc = short_desc;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }
}
