package com.knockoutzone.backend.entity;

import java.time.LocalDate;

import org.hibernate.envers.Audited;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.knockoutzone.backend.entity.enums.EventMode;
import com.knockoutzone.backend.entity.enums.Platform;
import com.knockoutzone.backend.entity.enums.ScheduleType;
import com.knockoutzone.backend.entity.enums.TournamentStatus;
import com.knockoutzone.backend.entity.enums.TournamentType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Audited(withModifiedFlag = true)
@Table(name="tournaments")
public class Tournament extends AuditingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id", nullable = false)
    private User host;
    
    @Column(length = 1000)
    private String description;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;

    private LocalDate registrationDeadline;

    private Boolean isRegistrationOpen;

    private Boolean requiresManualApproval;

    private Integer maxTeams;

    private Integer currentTeams;

    private Integer minPlayerPerTeam;

    private Integer maxPlayerPerTeam;

    private Double entryFee;

    private Double prizeMoney;

    private String sponsorName;

    private Boolean allowMixGenderTeams;

    private String rulesDocUrl;

    private String posterUrl;

    @Enumerated(EnumType.STRING)
    private TournamentStatus tournamentStatus;


    @Enumerated(EnumType.STRING)
    private TournamentType tournamentType;


    @Enumerated(EnumType.STRING)
    private EventMode eventMode;

    @Enumerated(EnumType.STRING)
    private Platform platform;

    private Integer matchDuration;

    private String contactEmail;

    private String whatsappOrDiscordLink;

    private Boolean isPrivateEvent;

    private String category;


    @Enumerated(EnumType.STRING)
    private ScheduleType matchScheduleType;

    private Integer numberOfRounds;

}
