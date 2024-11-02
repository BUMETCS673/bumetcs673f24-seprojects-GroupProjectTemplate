package edu.bu.cs673.secondhand.service.impl;

import edu.bu.cs673.secondhand.domain.Order;
import edu.bu.cs673.secondhand.service.OrderService;
import edu.bu.cs673.secondhand.vo.PageVo;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class OrderServiceImplTest {

    @Resource
    OrderService orderService;

    @BeforeEach
    void setUp() {
    }

    @Test
    @org.junit.jupiter.api.Order(1)
    void addOrder() {

        Order order = new Order();
        order.setUserId(45L);
        order.setIdleId(198L);
        order.setOrderPrice(BigDecimal.valueOf(200.0));
        order.setPaymentWay("Cash");
        order.setOrderNumber("YBIN_TEST_001");
        order.setPaymentStatus((byte) 1);
        order.setCreateTime(new Date());
        order.setOrderStatus((byte) 1);


        boolean success = orderService.addOrder(order);
        assertNotNull(order.getIdleId());
        assertTrue(success);
    }

    @Test
    @org.junit.jupiter.api.Order(2)
    void getOrder() {

        Long orderId = orderService.findOrderByNumber(
                        "YBIN_TEST_001", 1, 1)
                                    .getList()
                                    .get(0)
                                    .getId();
        Order order = orderService.getOrder(orderId);

        assertNotNull(order);
        assertEquals(orderId, order.getId());
        assertNotNull(order.getOrderStatus());
        assertNotNull(order.getPaymentStatus());
        assertNotNull(order.getPaymentWay());
        assertNotNull(order.getOrderNumber());
        assertNotNull(order.getCreateTime());
        assertNotNull(order.getOrderPrice());
        assertNotNull(order.getIdleId());
        assertNotNull(order.getUserId());

    }

    @Test
    @org.junit.jupiter.api.Order(3)
    void findOrderByNumber() {

        //orderNumber is unique
        String orderNumber = "YBIN_TEST_001";
        PageVo<Order> result = orderService.findOrderByNumber(orderNumber, 1, 10);

        assertNotNull(result);
        assertTrue(result.getList().size() > 0);
        assertEquals("YBIN_TEST_001", result.getList().get(0).getOrderNumber());
    }

    @Test
    @org.junit.jupiter.api.Order(4)
    void updateOrder() {

        Order order = orderService.findOrderByNumber(
                "YBIN_TEST_001", 1, 1)
                .getList()
                .get(0);

        BigDecimal oldPrice = order.getOrderPrice();
        Byte oldPaymentStatus = order.getPaymentStatus();

        order.setOrderPrice(BigDecimal.valueOf(999.0));
        order.setPaymentStatus((byte) 2);
        boolean updateSuccess = orderService.updateOrder(order);

        assertTrue(updateSuccess);
        Order newOrder = orderService.getOrder(order.getId());
        assertNotNull(newOrder);
        assertEquals(order.getId(), newOrder.getId());
        assertEquals(oldPrice, newOrder.getOrderPrice());
        assertEquals(oldPaymentStatus, newOrder.getPaymentStatus());
    }

    @Test
    @org.junit.jupiter.api.Order(5)
    void getAllOrder() {

        PageVo<Order> ret = orderService.getAllOrder(1, 10);

        assertNotNull(ret);
        assertNotNull(ret.getList());
        assertTrue(ret.getList().size() > 0);
        assertTrue(ret.getList().size() <= 10);
    }

    @Test
    @org.junit.jupiter.api.Order(6)
    void deleteOrder() {

        Long orderId = orderService.findOrderByNumber(
                "YBIN_TEST_001", 1, 1)
                .getList()
                .get(0)
                .getId();

        boolean success = orderService.deleteOrder(orderId);

        Order order = orderService.getOrder(orderId);

        assertTrue(success);
        assertNull(order);
    }
}