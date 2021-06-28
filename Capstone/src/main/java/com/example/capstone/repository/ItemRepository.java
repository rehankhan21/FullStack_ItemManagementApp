package com.example.capstone.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.capstone.execption.ResourceNotFoundException;
import com.example.capstone.model.Item;

// Jpa is the interface that is helping us communicate with hibernate
@Repository
public interface ItemRepository extends JpaRepository<Item,Integer> {
	
//	@Query("SELECT name From Student Where name = :name")
//	Student findStudentByName(@Param("name") String name);
	
	//Student findStudentByName(String name);
	
	//public static final List<Student> findByName = null;
	List<Item> findByName(String name);	
}