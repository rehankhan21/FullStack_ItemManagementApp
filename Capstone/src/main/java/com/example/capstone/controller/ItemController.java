package com.example.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.execption.ResourceNotFoundException;
import com.example.capstone.model.Item;
import com.example.capstone.repository.ItemRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ItemController {
	
	@Autowired
	private ItemRepository itemRepo;
	
	@GetMapping("/hi")
	public String hello() {
		return "Hello";
	}
	
	// get all students
	
	@GetMapping("/allitems")
	public List<Item> getAllStudents() {
		return itemRepo.findAll();	
	}
	
	// addingg records. restapi methods is post for adding
	@PostMapping("/additem")
	public Item newStudent(@RequestBody Item i)
	{
		// .save is the jpa method for insert into
		return itemRepo.save(i);
	}
	
	@GetMapping("/item/{id}")
	public ResponseEntity<Item> getStudentById(@PathVariable int id){
		// the arrow function in java is called a lambda fucntion
		// error/expection handling
		Item i = itemRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not found"));
		return ResponseEntity.ok(i);
	}
	
	@GetMapping("/items/{name}")
//	@RequestMapping(method = RequestMethod.GET)
	public List<Item> getStudentByName(@PathVariable String name){
		//Student s = studentRepo.findStudentByName(name);
		//return ResponseEntity.ok(s);
			return itemRepo.findByName(name);
		
	}
	
	@PutMapping("/item/{id}")
	public ResponseEntity<Item> updateStudent(@PathVariable int id, @RequestBody Item item){
		
		Item i = itemRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not found"));
		i.setName(item.getName());
		i.setPrice(item.getPrice());
		i.setDescription(item.getDescription());
		i.setCategory(i.getCategory());
		i.setDuration(i.getDuration());
		Item updatedItem = itemRepo.save(i);
		return ResponseEntity.ok(updatedItem);
	}
	
	@DeleteMapping("/item/{id}")
	// local varaible maps with path variable
	public String deleteStudent(@PathVariable int id) {
		
		itemRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not found"));
		itemRepo.deleteById(id);
		return "Item was deleted";
	}
}