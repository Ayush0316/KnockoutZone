package com.knockoutzone.backend.service.impl;

import com.knockoutzone.backend.entity.Foul;
import com.knockoutzone.backend.repository.FoulRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FoulService {

    @Autowired
    private FoulRepository foulRepository;

    public Foul addFoul(Foul foul) {
        foul.setTimestamp(LocalDateTime.now());
        return foulRepository.save(foul);
    }

    public List<Foul> getFoulsByMatch(Long matchId) {
        return foulRepository.findByMatchId(matchId);
    }

    public List<Foul> getFoulsByPlayer(Long playerId) {
        return foulRepository.findByPlayerId(playerId);
    }
}
