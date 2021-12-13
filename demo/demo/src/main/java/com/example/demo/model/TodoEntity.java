package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoEntity {
	private String id; //object 아이디
	private String userId; //유저 아이디
	private String title; //제목(todolist 제목)
	private boolean done; //완료 체크
}
