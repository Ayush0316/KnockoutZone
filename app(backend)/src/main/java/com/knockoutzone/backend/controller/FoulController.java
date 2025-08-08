package com.knockoutzone.backend.controller;

import com.knockoutzone.backend.entity.Foul;
import com.knockoutzone.backend.service.impl.FoulService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fouls")
public class FoulController {

    @Autowired
    private FoulService foulService;

    @PostMapping
    public Foul addFoul(@RequestBody Foul foul) {
        return foulService.addFoul(foul);
    }

    @GetMapping("/match/{matchId}")
    public List<Foul> getFoulsByMatch(@PathVariable Long matchId) {
        return foulService.getFoulsByMatch(matchId);
    }

    @GetMapping("/player/{playerId}")
    public List<Foul> getFoulsByPlayer(@PathVariable Long playerId) {
        return foulService.getFoulsByPlayer(playerId);
    }
}
