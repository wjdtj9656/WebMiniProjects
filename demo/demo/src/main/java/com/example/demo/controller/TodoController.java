package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.TodoDTO;
import com.example.demo.model.TodoEntity;
import com.example.demo.service.TodoService;

@RestController
@RequestMapping("todo")
public class TodoController {
	
	@Autowired
	private TodoService service;
	
@GetMapping("/test")
public ResponseEntity<?> testTodo(){
	String str = service.testService();
	List<String> list = new ArrayList<>();
	list.add(str);
	ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
	return ResponseEntity.ok().body(response);
}
@PostMapping
public ResponseEntity<?> createTodo(@RequestBody TodoDTO dto){
	try {
		String temporaryUserId = "temporary-user";
		
		//TodoEntity로 변환
		TodoEntity entity = TodoDTO.toEntity(dto);
		//id를 NULL로 초기화한다. 생성 당시에는 id가 없어야 하기 때문이다.
		entity.setId(null);
		//임시 사용자 아이디 설정 - 4장에서 추가 구현
		entity.setUserId(temporaryUserId);
		//서비스를 이용해 Todo 엔티티를 생성한다.
		List<TodoEntity> entities = service.create(entity);
		//자바 스트림을 이용해 리턴된 엔티티 리스트를 TodoDTO 리스트로 변환한다.
		List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());
		//변환된 TodoDTO 리스트를 이용해 ResponseDTO를 초기화한다.
		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();
		//responseDTO리턴
		return ResponseEntity.ok().body(response);
	} catch (Exception e) {
		//혹시 예외가 있는경우 DTO대신 에러메시지 리턴
		String error = e.getMessage();
		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
		return ResponseEntity.badRequest().body(response);
	}
}
}
