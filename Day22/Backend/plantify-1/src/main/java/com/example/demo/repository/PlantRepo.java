package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.PlantEntity;

public interface PlantRepo extends JpaRepository<PlantEntity, Integer> {

}
