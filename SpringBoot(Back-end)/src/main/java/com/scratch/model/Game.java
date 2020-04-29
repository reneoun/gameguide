package com.scratch.model;

import org.springframework.http.ResponseEntity;

public class Game {

    private final int id;
    private final String names;
    private final String shortDesc;
    private final ResponseEntity<String> image_url;

    public Game(int id, String names, String shortDesc, ResponseEntity image_url){
        this.id = id;
        this.names = names;
        this.shortDesc = shortDesc;
        this.image_url = image_url;
    }

    public String getNames() {
        return names;
    }

    public int getId() {
        return id;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public ResponseEntity<String> getImage_url() {
        return image_url;
    }
}
