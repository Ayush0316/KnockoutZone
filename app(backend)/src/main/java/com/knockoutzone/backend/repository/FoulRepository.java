package com.knockoutzone.backend.repository;

import com.knockoutzone.backend.entity.Foul;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoulRepository extends JpaRepository<Foul, Long> {
    List<Foul> findByMatchId(Long matchId);
    List<Foul> findByPlayerId(Long playerId);
}
