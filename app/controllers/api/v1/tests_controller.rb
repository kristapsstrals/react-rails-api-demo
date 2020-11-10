# frozen_string_literal: true

class Api::V1::TestsController < ApplicationController
  def index
    render json: { users: %w[John Kate Harry Mary] }
  end
end
