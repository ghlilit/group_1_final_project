require 'test_helper'

class DesksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @desk = desks(:one)
  end

  test "should get index" do
    get desks_url, as: :json
    assert_response :success
  end

  test "should create desk" do
    assert_difference('Desk.count') do
      post desks_url, params: { desk: { member_id: @desk.member_id, name: @desk.name } }, as: :json
    end

    assert_response 201
  end

  test "should show desk" do
    get desk_url(@desk), as: :json
    assert_response :success
  end

  test "should update desk" do
    patch desk_url(@desk), params: { desk: { member_id: @desk.member_id, name: @desk.name } }, as: :json
    assert_response 200
  end

  test "should destroy desk" do
    assert_difference('Desk.count', -1) do
      delete desk_url(@desk), as: :json
    end

    assert_response 204
  end
end
