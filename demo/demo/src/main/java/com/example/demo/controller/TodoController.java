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
		
		//TodoEntity�� ��ȯ
		TodoEntity entity = TodoDTO.toEntity(dto);
		//id�� NULL�� �ʱ�ȭ�Ѵ�. ���� ��ÿ��� id�� ����� �ϱ� �����̴�.
		entity.setId(null);
		//�ӽ� ����� ���̵� ���� - 4�忡�� �߰� ����
		entity.setUserId(temporaryUserId);
		//���񽺸� �̿��� Todo ��ƼƼ�� �����Ѵ�.
		List<TodoEntity> entities = service.create(entity);
		//�ڹ� ��Ʈ���� �̿��� ���ϵ� ��ƼƼ ����Ʈ�� TodoDTO ����Ʈ�� ��ȯ�Ѵ�.
		List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());
		//��ȯ�� TodoDTO ����Ʈ�� �̿��� ResponseDTO�� �ʱ�ȭ�Ѵ�.
		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();
		//responseDTO����
		return ResponseEntity.ok().body(response);
	} catch (Exception e) {
		//Ȥ�� ���ܰ� �ִ°�� DTO��� �����޽��� ����
		String error = e.getMessage();
		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
		return ResponseEntity.badRequest().body(response);
	}
}
}
