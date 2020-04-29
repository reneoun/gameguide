package com.scratch.controller;

import com.scratch.doa.GameDoa;
import com.scratch.model.Game;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping(path = "/game")
@CrossOrigin
public class GameController {

    @Autowired
    GameDoa gameDoa;

    @GetMapping
    public String check(){
        return "Jeuw Sweq";
    }

    @GetMapping(path = "/all")
    public List<Game> getAllGames(){
        return gameDoa.getAllGames();
    }
}
