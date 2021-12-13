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
	private String id; //object ���̵�
	private String userId; //���� ���̵�
	private String title; //����(todolist ����)
	private boolean done; //�Ϸ� üũ
}
