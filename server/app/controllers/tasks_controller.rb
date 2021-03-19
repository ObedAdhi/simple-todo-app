class TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /tasks
  def index
    @tasks = Task.all

    render json: @tasks
  end

  # Get /tasks/by-duedate
  def index_by_due_date
    @tasks = Task.all.order(due_date: :asc)

    render json: @tasks
  end

  # Get /tasks/by-priority
  def index_by_priority
    @tasks = Task.all.order(priority: :desc)

    render json: @tasks
  end

  # Get /tasks/by-description
  def filter_by_priority
    @tasks = Task.all.where(:priority => [params[:priority]])

    render json: @tasks
  end

  # Get /tasks/by-description
  def index_by_description
    @tasks = Task.all.order(description: :asc)

    render json: @tasks
  end

  # GET /tasks/1
  def show
    render json: @task
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:title, :due_date, :priority, :status, :description, :user_id)
    end
end
