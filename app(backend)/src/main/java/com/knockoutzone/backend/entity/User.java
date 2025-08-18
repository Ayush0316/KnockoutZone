package com.knockoutzone.backend.entity;


import org.hibernate.envers.Audited;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
@Table(name="users")
public class User extends AuditingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String username;
    
    private String email;
    
    @JsonIgnore
    private String password;

    private String firstName;
    
    private String lastName;

    private String phoneNumber;

    private String profilePictureUrl;

    private Boolean isEmailVerified;

    private Boolean isActive;

    @OneToMany(mappedBy = "host", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Tournament> tournamentsHosted = new ArrayList<>();

}