package com.knockoutzone.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Foul {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long matchId;
    private Long playerId;
    private Long teamId;

    private String type; // e.g., Minor, Major
    private String description;

    private LocalDateTime timestamp;

    // Manually add setter for timestamp to fix "cannot find symbol" error
    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    // Optional: you can also add getter explicitly if needed
    public LocalDateTime getTimestamp() {
        return timestamp;
    }
}
