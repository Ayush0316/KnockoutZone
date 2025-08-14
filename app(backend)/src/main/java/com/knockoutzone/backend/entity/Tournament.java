package com.knockoutzone.backend.entity;


import com.knockoutzone.backend.entity.enums.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.envers.Audited;

import java.time.LocalDate;

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
